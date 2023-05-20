# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'update'

git push -f git@github.com:uphg/large-screen-visualization.git master:gh-pages
# git push -f git@gitee.com:uphg/uphg.git master:gh-pages

rm -rf .git

cd -