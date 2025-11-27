import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const contentFilePath = path.join(process.cwd(), "src/data/content.json");

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
  experience?: ExperienceData[];
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
  image?: string;
}

interface ExperienceData {
  type?: string;
  title?: string;
  organization?: string;
  period?: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  link?: string;
}

export async function GET() {
  try {
    const fileContent = await fs.readFile(contentFilePath, "utf-8");
    const content = JSON.parse(fileContent);
    return NextResponse.json(content);
  } catch (error) {
    console.error("Error reading content file:", error);
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newContent: ContentData = await request.json();

    // Validate the incoming data
    if (!newContent || typeof newContent !== "object") {
      return NextResponse.json(
        { error: "Invalid content data" },
        { status: 400 }
      );
    }

    // Read existing content
    let existingContent: ContentData = {};
    try {
      const fileContent = await fs.readFile(contentFilePath, "utf-8");
      existingContent = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is invalid, start fresh
      existingContent = {};
    }

    // Merge new content with existing content
    const mergedContent: ContentData = {
      ...existingContent,
      ...newContent,
      // Deep merge for nested objects
      profile: {
        ...existingContent.profile,
        ...newContent.profile,
      },
      projects: {
        ...existingContent.projects,
        ...newContent.projects,
      },
      contact: {
        ...existingContent.contact,
        ...newContent.contact,
      },
    };

    // If experience is provided, replace it entirely
    if (newContent.experience) {
      mergedContent.experience = newContent.experience;
    }

    // Write merged content back to file
    await fs.writeFile(
      contentFilePath,
      JSON.stringify(mergedContent, null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "Content updated successfully",
      data: mergedContent,
    });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}
