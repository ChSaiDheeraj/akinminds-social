import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

dotenv.config();

const SEED_PASSWORD = "password123";

const randomUsers = [
	{ fullName: "Alex Rivera", username: "alex_rivera", email: "alex.rivera@example.com", bio: "Coffee enthusiast. Building things on the internet." },
	{ fullName: "Jordan Lee", username: "jordan_lee", email: "jordan.lee@example.com", bio: "Designer & developer. Always learning." },
	{ fullName: "Sam Chen", username: "sam_chen", email: "sam.chen@example.com", bio: "Full stack dev. Open source advocate." },
	{ fullName: "Morgan Taylor", username: "morgan_t", email: "morgan.t@example.com", bio: "Product person. Love shipping fast." },
	{ fullName: "Casey Brooks", username: "casey_b", email: "casey.brooks@example.com", bio: "Writer. Reader. Occasional coder." },
	{ fullName: "Riley Kim", username: "riley_kim", email: "riley.kim@example.com", bio: "UX researcher. User stories over everything." },
	{ fullName: "Quinn Davis", username: "quinn_d", email: "quinn.davis@example.com", bio: "Startup life. Building in public." },
	{ fullName: "Avery Johnson", username: "avery_j", email: "avery.j@example.com", bio: "Music and code. That's the vibe." },
	{ fullName: "Skyler Moore", username: "skyler_m", email: "skyler.moore@example.com", bio: "DevOps. Automate all the things." },
	{ fullName: "Parker Wilson", username: "parker_w", email: "parker.wilson@example.com", bio: "Frontend focus. Accessibility first." },
];

async function seedUsers() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB connected for seed.");

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(SEED_PASSWORD, salt);

		let created = 0;
		let skipped = 0;

		for (const u of randomUsers) {
			const exists = await User.findOne({
				$or: [{ username: u.username }, { email: u.email }],
			});
			if (exists) {
				console.log(`Skip (already exists): ${u.username}`);
				skipped++;
				continue;
			}

			await User.create({
				fullName: u.fullName,
				username: u.username,
				email: u.email,
				password: hashedPassword,
				bio: u.bio || "",
			});
			console.log(`Created: ${u.username} (${u.email})`);
			created++;
		}

		console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`);
		console.log(`All seed users have password: ${SEED_PASSWORD}`);
	} catch (err) {
		console.error("Seed error:", err.message);
		process.exit(1);
	} finally {
		await mongoose.disconnect();
		console.log("Disconnected from MongoDB.");
		process.exit(0);
	}
}

seedUsers();
