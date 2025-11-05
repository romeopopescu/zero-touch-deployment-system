import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello, world!' }, { status: 200 });
}

async function methodNotAllowed(request: Request) {
  return NextResponse.json(
    { message: 'Method Not Allowed' },
    { status: 405 }
  );
}

export {
  methodNotAllowed as POST,
  methodNotAllowed as PUT,
  methodNotAllowed as DELETE,
  methodNotAllowed as PATCH,
};