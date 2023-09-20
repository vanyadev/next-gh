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
