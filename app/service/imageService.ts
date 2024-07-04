/**
 * Get a random image from the Picsum API
 *
 * @param width the width of the image
 * @param height the height of the image
 * @param uniqueId the unique id of the image
 * @returns the URL of the image
 */
const fetchRandomImage = async (
  width: number = 640,
  height: number = 480,
  uniqueId: number
): Promise<string> => {
  return `https://picsum.photos/${width}/${height}?random=${uniqueId}`;
};

export { fetchRandomImage };