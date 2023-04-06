output_file = "js/words.js"
if __name__ == "__main__":
    file_names = ["nouns", "adjectives", "adverbs", "verbs"]
    open(output_file, "w").close()
    with open(output_file, "a") as outfile:
        for file_name in file_names:
            with open("res/" + file_name + ".txt", "r") as f:
                words_array = list(map(lambda x: '"' + x.strip() + '"', f.readlines()))
                outfile.write(
                    "const " + file_name + "=[" + ",".join(words_array) + "];"
                )
