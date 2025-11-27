"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";

interface ContentData {
  profile?: {
    name?: string;
    image?: string;
    tagline?: string;
    description?: string;
  };
  projects?: {
    autumn?: ProjectData;
    winter?: ProjectData;
    spring?: ProjectData;
    summer?: ProjectData;
  };
  contact?: {
    email?: string;
    location?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface ProjectData {
  title?: string;
  tagline?: string;
  description?: string;
  features?: string[];
  technologies?: string[];
  role?: string;
  challenges?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function Dashboard() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "projects" | "contact">("profile");

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch("/api/content");
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      setMessage({ type: "error", text: "Failed to load content" });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Content saved successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to save content" });
      }
    } catch (error) {
      console.error("Error saving content:", error);
      setMessage({ type: "error", text: "Failed to save content" });
    } finally {
      setSaving(false);
    }
  };

  const updateProfile = (field: keyof NonNullable<ContentData["profile"]>, value: string) => {
    setContent((prev) => ({
      ...prev,
      profile: {
        ...prev?.profile,
        [field]: value,
      },
    }));
  };

  const updateContact = (field: keyof NonNullable<ContentData["contact"]>, value: string) => {
    setContent((prev) => ({
      ...prev,
      contact: {
        ...prev?.contact,
        [field]: value,
      },
    }));
  };

  const updateProject = (
    season: "autumn" | "winter" | "spring" | "summer",
    field: keyof ProjectData,
    value: string | string[]
  ) => {
    setContent((prev) => ({
      ...prev,
      projects: {
        ...prev?.projects,
        [season]: {
          ...prev?.projects?.[season],
          [field]: value,
        },
      },
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-base-100 border-b border-base-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-base-content">Dashboard</h1>
            <Link href="/" className="btn btn-ghost btn-sm">
              ← Back to Site
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Message */}
        {message && (
          <div className={`alert ${message.type === "success" ? "alert-success" : "alert-error"} mb-6`}>
            <span>{message.text}</span>
            <button onClick={() => setMessage(null)} className="btn btn-ghost btn-sm">
              ✕
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="tabs tabs-boxed mb-6">
          <button
            className={`tab ${activeTab === "profile" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`tab ${activeTab === "projects" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`tab ${activeTab === "contact" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>

        <form onSubmit={handleSave}>
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Profile Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={content?.profile?.name || ""}
                      onChange={(e) => updateProfile("name", e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image Path</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={content?.profile?.image || ""}
                      onChange={(e) => updateProfile("image", e.target.value)}
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text">Tagline</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={content?.profile?.tagline || ""}
                      onChange={(e) => updateProfile("tagline", e.target.value)}
                    />
                  </div>
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered"
                      rows={3}
                      value={content?.profile?.description || ""}
                      onChange={(e) => updateProfile("description", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              {(["autumn", "winter", "spring", "summer"] as const).map((season) => (
                <div key={season} className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <h2 className="card-title capitalize">{season} Project</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Title</span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered"
                          value={content?.projects?.[season]?.title || ""}
                          onChange={(e) => updateProject(season, "title", e.target.value)}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Tagline</span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered"
                          value={content?.projects?.[season]?.tagline || ""}
                          onChange={(e) => updateProject(season, "tagline", e.target.value)}
                        />
                      </div>
                      <div className="form-control md:col-span-2">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          className="textarea textarea-bordered"
                          rows={3}
                          value={content?.projects?.[season]?.description || ""}
                          onChange={(e) => updateProject(season, "description", e.target.value)}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Role</span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered"
                          value={content?.projects?.[season]?.role || ""}
                          onChange={(e) => updateProject(season, "role", e.target.value)}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Technologies (comma-separated)</span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered"
                          value={content?.projects?.[season]?.technologies?.join(", ") || ""}
                          onChange={(e) =>
                            updateProject(
                              season,
                              "technologies",
                              e.target.value.split(",").map((t) => t.trim())
                            )
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Live URL</span>
                        </label>
                        <input
                          type="url"
                          className="input input-bordered"
                          value={content?.projects?.[season]?.liveUrl || ""}
                          onChange={(e) => updateProject(season, "liveUrl", e.target.value)}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">GitHub URL</span>
                        </label>
                        <input
                          type="url"
                          className="input input-bordered"
                          value={content?.projects?.[season]?.githubUrl || ""}
                          onChange={(e) => updateProject(season, "githubUrl", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Contact Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered"
                      value={content?.contact?.email || ""}
                      onChange={(e) => updateContact("email", e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={content?.contact?.location || ""}
                      onChange={(e) => updateContact("location", e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">GitHub URL</span>
                    </label>
                    <input
                      type="url"
                      className="input input-bordered"
                      value={content?.contact?.github || ""}
                      onChange={(e) => updateContact("github", e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input
                      type="url"
                      className="input input-bordered"
                      value={content?.contact?.linkedin || ""}
                      onChange={(e) => updateContact("linkedin", e.target.value)}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Twitter URL</span>
                    </label>
                    <input
                      type="url"
                      className="input input-bordered"
                      value={content?.contact?.twitter || ""}
                      onChange={(e) => updateContact("twitter", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
