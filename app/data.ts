import { FiBook } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { VscIssues } from "react-icons/vsc";
import { AiOutlinePullRequest } from "react-icons/ai";

export const topLanguages = [
  { name: "JavaScript", color: "yellow-500" },
  { name: "TypeScript", color: "blue-500" },
  { name: "Python", color: "green-500" },
  { name: "Java", color: "red-500" },
  { name: "C#", color: "purple-500" },
  { name: "Ruby", color: "pink-500" },
  { name: "Go", color: "indigo-500" },
  { name: "Swift", color: "teal-500" },
  { name: "Kotlin", color: "orange-500" },
  { name: "Rust", color: "gray-500" },
];
export const linksArr = [
    { label: "Code", icon: BsCodeSlash, num: "4.2m" },
    { label: "Repositories", icon: FiBook, num: "1m" },
    { label: "Issues", icon: VscIssues, num: "60k" },
    {
      label: "Pull Requests",
      icon: AiOutlinePullRequest,
      num: "544k",
    },
  ];