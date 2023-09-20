export async function fetchRepoById(id: string) {
  const response = await fetch(`https://api.github.com/repositories/${id}`, {
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
