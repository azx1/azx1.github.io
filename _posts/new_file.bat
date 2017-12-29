@echo off
set yy=%date:~0,4%
set mm=%date:~5,2%
set dd=%date:~8,2%
set shi=%time:~0,2%
set fen=%time:~3,2%
if "%date:~5,1%"==" " set mm=%mm: =0%
if "%date:~8,1%"==" " set dd=%dd: =0%
if "%time:~0,1%"==" " set shi=%shi: =0%
echo >%yy%-%mm%-%dd%-%shi%-%fen%-posts.md
type  %~sdp0\head.txt>%yy%-%mm%-%dd%-%shi%-%fen%-posts.md
