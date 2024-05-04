import { config, fields, collection } from "@keystatic/core";
import { block, inline, mark, repeating, wrapper } from "@keystatic/core/content-components";
import { HighlighterIcon } from "lucide-react";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "src/content/posts/**",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.mdx({
					label: "Content",
					options: {
						image: {
							directory: "src/assets/images/posts",
							publicPath: "@assets/images/posts/",
						},
					},
					components: {
						Highlight: mark({
							label: "Highlight",
							icon: <HighlighterIcon />,
							style: { textDecoration: "underline" },
							schema: {
								variant: fields.select({
									label: "Variant",
									options: [
										{ label: "Fluro", value: "fluro" },
										{ label: "Minimal", value: "minimal" },
										{ label: "Brutalist", value: "brutalist" },
									],
									defaultValue: "fluro",
								}),
							},
						}),
						Playlist: block({
							label: "Playlist",
							schema: {
								id: fields.text({ label: "Playlist ID" }),
							},
						}),
						StatusBadge: inline({
							label: "StatusBadge",
							schema: {
								status: fields.select({
									label: "Status",
									options: [
										{ label: "To do", value: "todo" },
										{ label: "In Progress", value: "in-progress" },
										{ label: "Ready for review", value: "ready-for-review" },
										{ label: "Done", value: "done" },
									],
									defaultValue: "todo",
								}),
							},
						}),
						Testimonial: wrapper({
							label: "Testimonial",
							schema: {
								author: fields.text({ label: "Author" }),
								role: fields.text({ label: "Role" }),
							},
						}),
						TestimonialGrid: repeating({
							label: "Testimonial Grid",
							children: ["Testimonial"],
							schema: {
								columns: fields.integer({
									label: "Columns",
									validation: { min: 1, max: 6 },
								}),
							},
						}),
					},
				}),
			},
		}),
	},
});
