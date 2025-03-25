// export const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
  
//       if (!user) return res.status(400).json({ error: "User not found" });
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  
//       const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
  
//       res.json({ 
//         token, 
//         user: { id: user._id, name: user.name, email: user.email, role: user.role, department: user.department, otrImage: user.otrImage } 
//       });
//     } catch (error) {
//       res.status(500).json({ error: "Login failed" });
//     }
//   };
  