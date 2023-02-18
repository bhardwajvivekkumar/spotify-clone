const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Bella Ciao",
    artist: "El Profesor",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FBella%20Ciao_64(PagalWorld.com.se).mp3?alt=media&token=3a358787-d33e-4804-8689-b300d8ca16fe",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg1.jpg?alt=media&token=9f50e496-bd44-413b-ab8c-7b0e6eea7cb3",
  },
  {
    id: 2,
    favourite: false,
    songName: "Beast",
    artist: "Anirudh Ravichander",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FBeast%20Mode%20Beast%20128%20Kbps.mp3?alt=media&token=029c5c62-f609-4ae2-be47-52ebfd1be7d0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg2.jpg?alt=media&token=2908462d-9317-423f-8f22-2e3626ab766a",
  },
  {
    id: 3,
    favourite: false,
    songName: "Joker - Rock and Roll",
    artist: "Hildur Guðnadóttir",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FJoker%20Music%20Video%20_%20Rock%20%20Roll%20Part%202%20%20Gary%20Glitter.mp3?alt=media&token=d149a761-5296-417b-b1f1-c8cd6da3a22c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg3.jpg?alt=media&token=07cacb27-a062-41b6-8dd3-4abe6f65ea14",
  },
  {
    id: 4,
    favourite: false,
    songName: "I Am A Peaky Blinder",
    artist: "Otnicka",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FPeaky-Blinders(PagalWorld).mp3?alt=media&token=34000aad-49f6-4e30-b98d-636c4fa5262a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg4.jpg?alt=media&token=9b2ffc98-b209-47af-9db7-f834daac2da3",
  },
  {
    id: 5,
    favourite: false,
    songName: "Naanga Vera Maari",
    artist: "Yuvan Shankar Raja",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FNaanga%20Vera%20Maari%20From%20Valimai%20Yuvan%20Shankar%20Raja%20128%20Kbps.mp3?alt=media&token=5c3e0e4e-a94c-4463-a299-7180d3008d6d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg5.jpg?alt=media&token=0e722846-998b-49ff-b8d8-3d21e7fcac1e",
  },
  {
    id: 6,
    songName: "Your Woman",
    artist: "White Town",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FYour%20Woman%20-%20Bgm.mp3?alt=media&token=7f3eeb33-4f59-412c-a21b-93d8f561120d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg6.jpg?alt=media&token=891ee5a1-ee66-40d8-9f55-c96c460f4e23",
  },
  {
    id: 7,
    favourite: false,
    songName: "Charlie",
    artist: "Gopi Sundar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FAkale-MassTamilan.io.mp3?alt=media&token=648486c1-44ea-4543-bf83-6de26dba2e75",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg7.jpg?alt=media&token=67d68a09-c407-4010-8a25-114f70d4d0c7",
  },
  {
    id: 8,
    favourite: false,
    songName: "Mask Off",
    artist: "Future",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FMask-Off(PagalWorld).mp3?alt=media&token=79616acc-ba37-4a1a-bc4d-80b55e4c3fa5",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg8.jpg?alt=media&token=cda95c3d-94c4-4653-b461-447c7b760590",
  },
  {
    id: 9,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2FHey-Mama(PagalWorld).mp3?alt=media&token=6fc8c4f5-2a5b-4b95-b7d4-9ab8c9c073cf",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg9.jpg?alt=media&token=2d456cca-5035-4e32-93b0-af28aeb9c602",
  },
  {
    id: 10,
    favourite: false,
    songName: "Turkish Folk Battle Song",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/songs%2Fsana-geldim-106818.mp3?alt=media&token=67a3b824-e919-46e5-8e6e-73460178094f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-9c22b.appspot.com/o/img%2Fimg10.jpg?alt=media&token=643cd1bb-61ff-4610-8183-7aee2705ac37",
  },
];

export { Songs };