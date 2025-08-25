export default function VideoPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Đây là video 🎬</h1>
      <video width="640" height="360" controls>
        <source src="/path/to/video.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
    </div>
  );
}
