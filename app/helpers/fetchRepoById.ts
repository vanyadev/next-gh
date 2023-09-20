export default async function fetchRepoById(id: string) {
  try {
    const response = await fetch(`https://api.github.com/repositories/${id}`, {
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
  } catch (error) {
    throw new Error(error as any);
  }
}
