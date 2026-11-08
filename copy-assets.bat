@echo off
echo ==============================================
echo  Garima Wellness Center - Copying Image Assets
echo ==============================================

if not exist "public\images\transformations" mkdir "public\images\transformations"
if not exist "public\images\notes" mkdir "public\images\notes"
if not exist "public\images\brand" mkdir "public\images\brand"

set SRC=C:\Users\user\.gemini\antigravity\brain\176f8139-5ef5-4660-b93b-5c38baa01027\.user_uploaded

copy "%SRC%\media_1794068054975_b0d5ea92.jpg" "public\images\transformations\transformation-1-fatloss-9kg.jpg" /Y
copy "%SRC%\media_1794068115349_2910fdea.jpg" "public\images\transformations\transformation-2-recovery-gain.jpg" /Y
copy "%SRC%\media_1794068115352_1c6640b4.jpg" "public\images\transformations\transformation-3-weightloss-20kg.jpg" /Y
copy "%SRC%\media_1794068115357_f44b6de8.jpg" "public\images\transformations\transformation-4-weightloss-14kg.jpg" /Y
copy "%SRC%\media_1794068115352_2e434c9e.jpg" "public\images\transformations\transformation-5-skin-wellness.jpg" /Y

copy "%SRC%\media_1794068169023_6ca6e742.jpg" "public\images\notes\founder-handwritten-mission.jpg" /Y
copy "%SRC%\media_1794068169040_583382ea.jpg" "public\images\notes\founder-handwritten-contact.jpg" /Y

echo Assets successfully copied!

