export async function fetcher(url: string, opts: RequestInit = {}) {
  const res = await fetch(url, { ...opts, next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
  return res.json();
}