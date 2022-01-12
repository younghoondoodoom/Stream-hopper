import re
from collections import Counter

import pandas as pd

ott_movietv_kor = pd.read_csv("../input/recommendation-data/Contents.csv")
ott_movietv_kor.drop(columns="Unnamed: 0", inplace=True)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"([A-Za-z]*)[+]", r"\g<1>", x)
)

ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"Anime\w*", "Animation", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"Roman\w*", "Romance", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(
        r"Features|Series|Stor['y'|'ies']|Unscripted|Movies?|Film|TV|TV Show?|Audience|\sand",
        "",
        x,
    )
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"[&/']", ",", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"([A-Za-z]*)ies,?", r"\g<1>y", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"([A-Za-z]*)ical,?", r"\g<1>y", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub(r"([A-Za-z]*)s$|s,", r"\g<1>", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub("Musy", "Musical", x)
)
ott_movietv_kor["genre"] = ott_movietv_kor["genre"].apply(
    lambda x: re.sub("Medy", "Medical", x)
)
#값 확인
genres = ott_movietv_kor["genre"]

soup_genre = ott_movietv_kor[["genre"]].apply(",".join).reset_index()
splited_genre = soup_genre.iloc[0, 1].strip().replace(",", " ").split()
genre_names = set(splited_genre)

soup_genre.iloc[0, 1].find("St")

cnt = Counter()
for word in splited_genre:
    cnt[word] += 1

cnt.most_common(len(cnt))
