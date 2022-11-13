const phImages = [
  {
    id: "image1",
    url: "https://th.bing.com/th/id/R.1d6cf4676c82312d0d92e0730fb2ca12?rik=4zv3sAUnGmd67Q&pid=ImgRaw&r=0",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi.",
    createAt: "10/08/2022",
  },
  {
    id: "image2",
    url: "https://th.bing.com/th/id/R.1d6cf4676c82312d0d92e0730fb2ca12?rik=4zv3sAUnGmd67Q&pid=ImgRaw&r=0",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi.",
    createAt: "10/08/2022",
  },
  {
    id: "image3",
    url: "https://th.bing.com/th/id/R.1d6cf4676c82312d0d92e0730fb2ca12?rik=4zv3sAUnGmd67Q&pid=ImgRaw&r=0",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi.",
    createAt: "10/08/2022",
  },
  {
    id: "image4",
    url: "https://th.bing.com/th/id/R.1d6cf4676c82312d0d92e0730fb2ca12?rik=4zv3sAUnGmd67Q&pid=ImgRaw&r=0",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi.",
    createAt: "10/08/2022",
  },
  {
    id: "image5",
    url: "https://th.bing.com/th/id/R.1d6cf4676c82312d0d92e0730fb2ca12?rik=4zv3sAUnGmd67Q&pid=ImgRaw&r=0",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi.",
    createAt: "10/08/2022",
  },
  {
    id: "image6",
    url: "https://th.bing.com/th/id/R.1d6cf4676c82312d0d92e0730fb2ca12?rik=4zv3sAUnGmd67Q&pid=ImgRaw&r=0",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ab. Est praesentium quisquam, suscipit vitae exercitationem rem animi.",
    createAt: "10/08/2022",
  },
];

const getImages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(phImages);
    }, 1000);
  })
}

export default getImages;