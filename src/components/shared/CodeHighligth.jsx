import { useMemo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({
    code,
    language = "jsx",
    showLineNumbers = true,
    title,
}) {
    const [copied, setCopied] = useState(false);

    const normalized = useMemo(() => code.trimEnd(), [code]);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(normalized);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
        } catch {
            // fallback simples
            const textarea = document.createElement("textarea");
            textarea.value = normalized;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
        }
    }

    return (
        <figure className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                    {title ? (
                        <span className="text-sm font-medium text-zinc-700">{title}</span>
                    ) : (
                        <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">
                            {language}
                        </span>
                    )}
                </div>

                <button
                    type="button"
                    onClick={handleCopy}
                    className="text-xs font-semibold px-2 py-1 rounded-md border border-zinc-200 bg-white hover:bg-zinc-100"
                >
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>

            <SyntaxHighlighter
                language={language}
                style={oneDark}
                showLineNumbers={showLineNumbers}
                customStyle={{
                    margin: 0,
                    padding: "14px 14px",
                    background: "transparent",
                    fontSize: "13px",
                    lineHeight: "1.6",
                }}
                lineNumberStyle={{
                    minWidth: "2.25em",
                    paddingRight: "1em",
                    color: "rgba(255,255,255,0.35)",
                }}
            >
                {normalized}
            </SyntaxHighlighter>
        </figure>
    );
}
