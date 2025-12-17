// GET

export async function getData(params) {
  try {
    const resp = await fetch('https://portfolio-js.b.goit.study/api/reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!resp.ok) {
      throw new Error(`HTTP request error! Status: ${response.status}`);
    }
    return await resp.json();
  } catch (error) {
    console.error('Server error:', error);
  }
}
// POST
export async function postData(data) {
  const resp = await fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!resp.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return resp.json();
}
