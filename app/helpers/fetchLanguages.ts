export async function fetchLanguages(languages_url: string) {
  const response = await fetch(languages_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${
        process.env.GITHUB_KEY ||
        "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"
      }`,
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
