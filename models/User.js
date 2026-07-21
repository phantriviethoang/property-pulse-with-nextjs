import { Schema, model, models } from "mongoose";

const UserSchema = new Scheme(
	{
		email: {
			type: String,
			unique: [true, "Email already exists"],
			required: [true, "Email is required"],
		},
		username: {
			type: String,
			required: [true, "Username is required"],
		},
		image: {
			type: String,
		},
		bookmarks: [
			{
				tpye: Schema.Types.ObjectId,
				ref: "Property",
			},
		],
	},
	{
		timestamps: true,
	},
);

const User = models.User || model("User", UserSchema);

export default User;
