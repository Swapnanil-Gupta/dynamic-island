import albumArt from "../../assets/album_art.jpg";

function SongMeta() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="overflow-hidden rounded-lg">
        <img
          src={albumArt}
          alt="Album art"
          className="object-cover w-16 h-16"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Numb</p>
        <p className="text-sm">Linkin Park</p>
      </div>
    </div>
  );
}

export default SongMeta;
