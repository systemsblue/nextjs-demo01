/** @type {import('next').NextConfig} */

//const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const branchName = 'nextjs-demo01';

const nextConfig = {
//  reactStrictMode: true,
 //assetPrefix: branchName,
 //basePath: branchName,
 output: "export",
};

module.exports = nextConfig;
