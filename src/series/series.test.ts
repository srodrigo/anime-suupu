import { apiToDomain } from "./series";

test.each([
  [
    {
      en: "en title",
      en_us: "us en title",
      en_jp: "jp en title",
      ja_jp: "ja jp title",
    },
    "en title",
  ],
  [
    {
      en_us: "us en title",
      en_jp: "jp en title",
      ja_jp: "ja jp title",
    },
    "us en title",
  ],
  [
    {
      en_jp: "jp en title",
      ja_jp: "ja jp title",
    },
    "jp en title",
  ],
  [
    {
      ja_jp: "ja jp title",
    },
    "ja jp title",
  ],
  [{}, ""],
])(
  "converts collection item with %o title into domain series with %o title",
  (apiTitle, domainTitle) => {
    expect(
      apiToDomain({
        id: "test id",
        attributes: {
          titles: apiTitle,
          posterImage: {
            small: "http://test.com/image.png",
          },
        },
      })
    ).toEqual({
      id: "test id",
      title: domainTitle,
      image: "http://test.com/image.png",
    });
  }
);
