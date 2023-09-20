export async function fetchLanguages(languages_url: string) {
  const response = await fetch(languages_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_KEY}`,
      "User-Agent": "my-app",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
