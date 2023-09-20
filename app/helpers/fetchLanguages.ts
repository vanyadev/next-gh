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
