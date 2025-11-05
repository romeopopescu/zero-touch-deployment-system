import { createMocks } from 'node-mocks-http';
import { NextResponse } from 'next/server';
import { GET, POST } from '../../src/app/api/route';

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((body, init) => ({
      json: async () => body,
      status: init?.status || 200,
    })),
  },
}));

describe('/api', () => {
  beforeEach(() => {
    (NextResponse.json as jest.Mock).mockClear();
  });

  it('returns a 200 for GET requests', async () => {
    
    const response = await GET({} as Request);
    const body = await response.json();


    expect(response.status).toBe(200);
    expect(body).toEqual({ message: 'Hello, world!' });
  });

  it('returns a 405 for POST requests', async () => {
    const response = await POST({} as Request);
    const body = await response.json();

    expect(response.status).toBe(405);
    expect(body).toEqual({ message: 'Method Not Allowed' });

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: 'Method Not Allowed' },
      { status: 405 }
    );
  });
});