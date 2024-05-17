import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server"

const items = [
    { id: 1, name: 'itemA' },
    { id: 2, name: 'itemB' },
    { id: 3, name: 'itemC' },
];

export async function GET(request: NextRequest) {
    console.log('get');
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    const item = await request.json();
    items.push({ id: items.length + 1, name: item.name });
    revalidateTag('tagName');
    return NextResponse.json({ item });
}
