const DownloadButton = ({ url }: { url: string }) => {
  return (
    <a
      href={url}
      download="converted-image.png"
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
    >
      Download Image
    </a>
  );
};

export default DownloadButton;
