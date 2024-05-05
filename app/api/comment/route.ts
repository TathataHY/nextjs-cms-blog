import { writeClient } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const { name, email, comment, post_id } = await request.json();

  if (!name || !email || !comment || !post_id) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        status: 400,
        message: "Please fill in all the fields",
      })
    );
  }

  try {
    const newComment = await writeClient.create({
      _type: "comment",
      name,
      email,
      comment,
      post: {
        _type: "reference",
        _ref: post_id,
      },
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        status: 200,
        message: "Comment added",
        comment: newComment,
      })
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ success: false, status: 500, message: error.message })
    );
  }
}
