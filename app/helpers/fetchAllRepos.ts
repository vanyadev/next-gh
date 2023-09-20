export async function fetchAllRepos(username: string, page = "1") {
  try {
    const [dataResponse, totalCountResponse] = await Promise.all([
      fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_KEY || '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'}`,
          },
        }
      ),
      fetch(`https://api.github.com/users/${username}/repos`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_KEY || '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'}`,
        },
      }),
    ]);

    if (!dataResponse.ok) {
      const errorData = await dataResponse.json();
      const errorMessage =
        errorData.message ||
        `Failed to fetch data: ${dataResponse.status} ${dataResponse.statusText}`;
        throw new Error(
          `Failed to fetch data: ${dataResponse.status} ${dataResponse.statusText}`
        );
      return { error: errorMessage, data: null, total_data: 0 };
    }

    if (!totalCountResponse.ok) {
      const errorData = await totalCountResponse.json();
      const errorMessage =
        errorData.message ||
        `Failed to fetch total data: ${totalCountResponse.status} ${totalCountResponse.statusText}`;
        throw new Error(
          `Failed to fetch data: ${totalCountResponse.status} ${totalCountResponse.statusText}`
        );
      return { error: errorMessage, data: null, total_data: 0 };
    }

    const data = await dataResponse.json();
    const totalData = await totalCountResponse.json();
    return { error: null, data, total_data: totalData.length };
  } catch (error) {
    return {
      error: "An error occurred while fetching data.",
      data: null,
      total_data: 0,
    };
  }
}
