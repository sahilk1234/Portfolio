const normalizeKey = (label: string) => label.trim().toLowerCase();

export type TechIconRef =
  | { type: "class"; value: string }
  | { type: "svg"; path: string; hex?: string };

const iconMap: Partial<Record<string, TechIconRef>> = {
  react: { type: "class", value: "devicon-react-original colored" },
  "react native": { type: "class", value: "devicon-react-original colored" },
  "next.js": {
    type: "class",
    value: "devicon-nextjs-original-wordmark colored",
  },
  nextjs: {
    type: "class",
    value: "devicon-nextjs-original-wordmark colored",
  },
  "next js": {
    type: "class",
    value: "devicon-nextjs-original-wordmark colored",
  },
  redux: { type: "class", value: "devicon-redux-original colored" },
  "tailwind css": { type: "class", value: "devicon-tailwindcss-plain colored" },
  tailwind: { type: "class", value: "devicon-tailwindcss-plain colored" },
  "node.js": { type: "class", value: "devicon-nodejs-plain colored" },
  nodejs: { type: "class", value: "devicon-nodejs-plain colored" },
  nestjs: { type: "class", value: "devicon-nestjs-original colored" },
  express: { type: "class", value: "devicon-express-original" },
  postgresql: { type: "class", value: "devicon-postgresql-plain colored" },
  postgres: { type: "class", value: "devicon-postgresql-plain colored" },
  graphql: { type: "class", value: "devicon-graphql-plain colored" },
  expo: { type: "class", value: "devicon-expo-original" },
  framework7: { type: "class", value: "devicon-framework7-original colored" },
  html: { type: "class", value: "devicon-html5-plain colored" },
  html5: { type: "class", value: "devicon-html5-plain colored" },
  css: { type: "class", value: "devicon-css3-plain colored" },
  css3: { type: "class", value: "devicon-css3-plain colored" },
  bootstrap: { type: "class", value: "devicon-bootstrap-plain colored" },
  django: { type: "class", value: "devicon-django-plain colored" },
  aws: {
    type: "class",
    value: "devicon-amazonwebservices-plain-wordmark colored",
  },
  "amazon web services": {
    type: "class",
    value: "devicon-amazonwebservices-plain-wordmark colored",
  },
  gcp: { type: "class", value: "devicon-googlecloud-plain colored" },
  "google cloud": { type: "class", value: "devicon-googlecloud-plain colored" },
  jenkins: { type: "class", value: "devicon-jenkins-plain colored" },
  terraform: { type: "class", value: "devicon-terraform-plain colored" },
  jest: { type: "class", value: "devicon-jest-plain colored" },
  tensorflow: { type: "class", value: "devicon-tensorflow-original colored" },
  keras: { type: "class", value: "devicon-keras-plain colored" },
  typescript: { type: "class", value: "devicon-typescript-plain colored" },
  javascript: { type: "class", value: "devicon-javascript-plain colored" },
  c: { type: "class", value: "devicon-c-plain colored" },
  "c++": { type: "class", value: "devicon-cplusplus-plain colored" },
  java: { type: "class", value: "devicon-java-plain colored" },
  python: { type: "class", value: "devicon-python-plain colored" },
  "python 3": { type: "class", value: "devicon-python-plain colored" },
  jupyter: { type: "class", value: "devicon-jupyter-plain colored" },
  "jupyter notebook": { type: "class", value: "devicon-jupyter-plain colored" },
  bitbucket: { type: "class", value: "devicon-bitbucket-original colored" },
  github: { type: "class", value: "devicon-github-original" },
  "github alt": {
    type: "svg",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    hex: "181717",
  },
  linkedin: {
    type: "svg",
    hex: "0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  jira: { type: "class", value: "devicon-jira-plain colored" },
  prisma: { type: "class", value: "devicon-prisma-original colored" },
  docker: { type: "class", value: "devicon-docker-plain colored" },
  fastapi: { type: "class", value: "devicon-fastapi-plain colored" },
  pytorch: { type: "class", value: "devicon-pytorch-original colored" },
  nginx: { type: "class", value: "devicon-nginx-original colored" },
  redis: { type: "class", value: "devicon-redis-plain colored" },
  linux: { type: "class", value: "devicon-linux-plain" },
  sqlite: { type: "class", value: "devicon-sqlite-plain colored" },
  sqlmodel: { type: "class", value: "devicon-sqlite-plain colored" },
  "rest api": { type: "class", value: "devicon-swagger-plain colored" },
  swagger: { type: "class", value: "devicon-swagger-plain colored" },
  awscli: { type: "class", value: "devicon-amazonwebservices-plain colored" },
  awscloud: { type: "class", value: "devicon-amazonwebservices-plain colored" },
  visualstudio: { type: "class", value: "devicon-visualstudio-plain colored" },
  "visual studio": {
    type: "class",
    value: "devicon-visualstudio-plain colored",
  },
  jiraatlassian: { type: "class", value: "devicon-jira-plain colored" },
  githublight: { type: "class", value: "devicon-github-original" },
  bitbucketcloud: { type: "class", value: "devicon-bitbucket-original colored" },
  "google cloud platform": {
    type: "class",
    value: "devicon-googlecloud-plain colored",
  },
  adyen: {
    type: "svg",
    hex: "0ABF53",
    path: "M11.64703 9.88245v2.93377c0 .13405.10867.24271.24272.24271h.46316V9.88245h1.76474v5.1503c0 .46916-.38033.8495-.8495.8495H9.94303v-1.23507h2.40991v-.52942h-1.62108c-.46917 0-.8495-.38033-.8495-.8495V9.88245h1.76467Zm-8.26124.00001c.46917 0 .8495.38034.8495.8495v3.3858H.8495c-.46916 0-.8495-.38033-.8495-.8495v-.94805c0-.46917.38034-.8495.8495-.8495h.91521v1.3455c0 .13406.10867.24272.24272.24272h.46316V11.184c0-.13405-.10867-.24271-.24272-.24271l-2.16719-.00002V9.88246Zm5.79068-1.76471v6.00001H5.79068c-.46917 0-.8495-.38033-.8495-.8495v-2.53631c0-.46917.38033-.8495.8495-.8495h.91515v2.93377c0 .13405.10867.24271.24272.24271h.46316l.00005-4.94118h1.76471Zm9.03286 1.76471a.8495.8495 0 0 1 .8495.8495v.94805c0 .46917-.38033.8495-.8495.8495h-.9152v-1.3455c0-.13404-.10868-.2427-.24272-.2427h-.46317v1.8749c0 .13406.10867.24272.24272.24272h2.16719v1.05883h-3.32511c-.46917 0-.8495-.38033-.8495-.8495v-3.3858Zm4.94117 0c.46916 0 .8495.38034.8495.8495v3.3858h-1.7647V11.184c-.0004-.13388-.10884-.24232-.24272-.24272h-.46316v3.1765H19.7647V9.88245Z",
  },
};

export const getTechIconRef = (label: string): TechIconRef | undefined => {
  return iconMap[normalizeKey(label)];
};
