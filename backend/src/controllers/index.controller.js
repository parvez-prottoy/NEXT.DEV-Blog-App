/**
 * @route GET /health
 * @access public
 * @description  Home page
 */
export const getHealth = (_req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Server is Okay 🙂",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error getting health page",
    });
  }
};
/**
 * @route GET /
 * @access public
 * @description  Home page
 */
export const getHome = (_req, res) => {
  try {
    res.status(200).send(`<h1>Welcome to NEXT.DEV Server 🙂</h1>`);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error getting home page",
    });
  }
};
