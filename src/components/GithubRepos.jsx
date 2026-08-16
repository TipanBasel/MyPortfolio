import { useState, useEffect } from 'react';

const GitHubRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const GITHUB_USERNAME = "facebook";

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchRepos = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
                    { signal }
                );

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setRepos(data);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted (Component unmounted)');
                } else {
                    setError(err.message);
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchRepos();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <section className="py-16 px-6 bg-bkg text-content transition-colors duration-300">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                    Latest Code
                </h2>

                {loading && (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
                        <p>⚠️ Failed to load repositories: {error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-xl text-primary group-hover:underline">
                                        {repo.name}
                                    </h3>
                                    {/* Star Count Badge */}
                                    <span className="flex items-center text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                        ⭐ {repo.stargazers_count}
                                    </span>
                                </div>

                                <p className="text-secondary text-sm mb-4 line-clamp-2 h-10">
                                    {repo.description || "No description available."}
                                </p>

                                <div className="flex gap-3 text-xs text-slate-500 dark:text-slate-400">
                                    {repo.language && (
                                        <span className="flex items-center gap-1">
                                            ● {repo.language}
                                        </span>
                                    )}
                                    <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default GitHubRepos;