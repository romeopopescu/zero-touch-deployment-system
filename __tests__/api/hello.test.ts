import { createMocks } from 'node-mocks-http';
import helloHandler from '../../src/app/api/route';

describe('/api/hello', () => {
  it('returns a 200 for GET requests', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await helloHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Hello, world!' });
  });

  it('returns a 405 for POST requests', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await helloHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Method Not Allowed' });
  });
});