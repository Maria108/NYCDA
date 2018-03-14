function whatIsYourLearningStyle() {
    let questions = [
        "When I need to learn:\n1.I like to see how I feel about it first\n2.I like to watch and listen before I do it.\n3.I like to think about why.\n4. I like to just start, do it.",
        "I learn best when:\n1.I just trust my hunches and feelings.\n2.I listen and watch carefully.\n3.I rely on logical thinking.\n4.I work hard to get things done.",
        "When I am learning:\n1.I have feelings and reactions.\n2. I am quiet and reserved until comfortable.\n3.I tend to reason things out first.\n4.I am usually the one responsible.",
        "I learn by:\n1.Feeling.\n2.Watching.\n3.Thinking.\n4.Doing",
        "When I learn:\n1.I get involved.\n2.I observe.\n3.I evaluate things.\n4.I am active."
    ]
    let ce = 0;
    let ro = 0;
    let ac = 0;
    let ae = 0;
    for (let idx = 0; idx < questions.length; idx++) {
        let myQuestion = prompt(questions[idx])
        if (myQuestion == 1) {
            ce++
        } else if (myQuestion == 2) {
            ro++
        } else if (myQuestion == 3) {
            ac++
        } else if (myQuestion == 4) {
            ae++
        }
    }
    if (ce > ro && ce > ac && ce > ae) {
        return "Your learning style is Concrete Experience (CE) -- A CE orientation focuses on being involved in experiences and dealing with immediate human situations in a personal way. It emphasizes feeling more than thinking; a concern with the uniqueness and complexity of present reality over theories and generalizations; and intuitive, artistic approach over a systematic, scientific approach to problems."
    } else if (ro > ce && ro > ac && ro > ae) {
        return "Your learning style is Reflective Observation (RO) -- An RO orientation focuses on understanding the meaning of ideas and situations by carefully observing and describing them. It emphasizes reflection and understanding over action and practical application; a concern with what is true or how things happen over what will work."
    } else if (ac > ce && ac > ro && ac > ae) {
        return "Your learning style is Abstract Conceptualization (AC) -- An AC orientation focuses on using logic, ideas, and concepts. It emphasizes thinking rather than feeling; a concern with building general theories rather than intuitively understanding unique, specific areas; a scientific more than an artistic approach to problems."
    } else if (ae > ce && ae > ro && ae > ac) {
        return "Your learning style is Active Experimentation (AE) -- An AE orientation focuses on actively influencing people and changing situations. It emphasizes practical applications as distinct from reflective understanding; a pragmatic concern with what works rather than with what is absolute truth; an emphasis on doing, more than observing."
    }
}

whatIsYourLearningStyle()