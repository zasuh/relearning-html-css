/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { FaDropbox, FaFolder, FaDownload } from "react-icons/fa";

const DATA = [
  {
    title: "Title 1.zip",
    size: "21mb",
  },
  {
    title: "Title 2.zip",
    size: "21mb",
  },
  {
    title: "Title 3.zip",
    size: "21mb",
  },
  {
    title: "Title 4.zip",
    size: "21mb",
  },
  {
    title: "Title 5.zip",
    size: "21mb",
  },
  {
    title: "Title 6.zip",
    size: "21mb",
  },
  {
    title: "Title 7.zip",
    size: "21mb",
  },
  {
    title: "Title 8.zip",
    size: "21mb",
  },
  {
    title: "Title 9.zip",
    size: "21mb",
  },
  {
    title: "Title 10.zip",
    size: "21mb",
  },
  {
    title: "Title 2.zip",
    size: "21mb",
  },
  {
    title: "Title 3.zip",
    size: "21mb",
  },
  {
    title: "Title 4.zip",
    size: "21mb",
  },
  {
    title: "Title 5.zip",
    size: "21mb",
  },
  {
    title: "Title 6.zip",
    size: "21mb",
  },
  {
    title: "Title 7.zip",
    size: "21mb",
  },
  {
    title: "Title 8.zip",
    size: "21mb",
  },
  {
    title: "Title 9.zip",
    size: "21mb",
  },
  {
    title: "Title 10.zip",
    size: "21mb",
  },
];

export default function FilesCard() {
  return (
    <Wrapper>
      <Header>
        <div>Download files</div>
        <Dropbox>
          <FaDropbox />
          <div>Save to my Dropbox</div>
        </Dropbox>
      </Header>

      <Separator />

      <Content>
        {DATA.map((file, index, row) => (
          <>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <div
                css={{
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <FaFolder css={{ color: "#349beb" }} />
                {file.title}
              </div>
              <div css={{ fontSize: 12 }}>{file.size}</div>
            </div>
            {!(index + 1 === row.length) && <Separator />}
          </>
        ))}
        <DownloadAll>
          <FaDownload css={{ color: "#349beb" }} />
          Download All
        </DownloadAll>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  width: 400,
  height: 500,
  backgroundColor: "white",
  borderRadius: 8,
  position: "relative",
});

const Header = styled.div({
  width: "calc(100% - 20)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 10,
  fontWeight: 500,
});

const Dropbox = styled.div({
  width: 175,
  display: "flex",
  alignItems: "center",
  gap: 10,
  cursor: "pointer",
  color: "#349beb",
  ":hover": {
    color: "#367aad",
  },
});

const Content = styled.div({
  maxHeight: 450,
  width: "100%",
  overflow: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#6969dd #e0e0e0",
  marginBottom: 20,
});

const Separator = styled.div({
  height: 1,
  width: "100%",
  backgroundColor: "#9eabb5",
  opacity: 0.5,
});

const DownloadAll = styled.div({
  position: "absolute",
  bottom: "0.5rem",
  left: 0,
  right: 0,
  marginLeft: "auto",
  marginRight: "auto",
  width: 110,
  height: 15,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  borderRadius: 12,
  fontSize: 14,
  fontWeight: 500,
  padding: 5,
  backgroundColor: "white",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  ":hover": {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 20px",
  },
});
