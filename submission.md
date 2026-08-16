# Project Submission Report

## 1. Student Details

- **Full Name:** Ochieng' Glen Kipchumba
- **GitHub Username:** glenkochieng
- **Email:** glen.ochieng'@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/library-catalogue-166101/index.html

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** (https://github.com/IS-PROJECT-2026/library-catalogue-166101/commit/218f99b0ad35472ea47a051ea4e708f09822d133)
- **Why this one?** This commit clearly states what feature is being added.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** (https://github.com/IS-PROJECT-2026/library-catalogue-166101/commit/380c622d4b33450f479b69dd3cfd74776378abe0)
- **What happened and how did you recover?** I did not like how I named the commit since it didn't follow the commit rules. I have not yet changed it.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** (https://github.com/IS-PROJECT-2026/library-catalogue-166101/pull/23)
- **What did you check before merging?** I checked to see that I had not changed the wrong file.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would reduce the number of branches.
- **Link to the evidence of the original decision:** (https://github.com/IS-PROJECT-2026/library-catalogue-166101/branches/yours)

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.


### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

(image.png)

* **Caption:** A screenshot of the three Milestones.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

(image-1.png)

* **Caption:** A screenshot of the Project Board after project completion.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

(image-2.png)

* **Caption:** The branch list are categorically arranged for each issue they affect.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

(image-3.png)

* **Caption:** This pull request was implementing adding a genre filter to the system.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Concurrent modification of the same line in the same file.

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

evidence/conflict_evidence_1.png

* **Caption:**  Branches `style/13-header-teal` and `style/13-header-navy` were both cut from the same commit on `main`, and each rewrote the hero `<h1>` element in `index.html`. After `style/13-header-teal` was merged into `main` via pull request, running `git merge origin/main` from `style/13-header-navy` returned `CONFLICT (content): Merge conflict in index.html` and left the merge in an unresolved state.

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

(image-4.png)

* **Caption:** Git performs a three-way merge, comparing each branch against the common ancestor commit. Both sides changed the same line relative to that ancestor — one to `hero-title--navy` with the heading "Discover Your Next Read", the other to `hero-title--teal` with "Browse the Mwangaza Collection" — so neither change could be treated as an unmodified base and Git had no basis for choosing between them. I resolved it by combining the two intentions: the teal class from the incoming branch, which matches the site's existing accent palette, paired with the navy branch's heading copy, which is more direct as a call to action.


#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

(image-5.png)

* **Caption:** All conflict markers were removed and the single reconciled `<h1>` line was staged and committed as `fix: resolve hero title conflict on merge with main`. The pull request for `style/13-header-navy` then reported a mergeable state and was merged into `main`, leaving a linear, conflict-free history with both branches' work preserved.


---

### Conflict 2 — Different Cause

**What cause did you use?** Add/add conflict. Two branches independently creating a new file at the same path.


**Why does this cause trigger a conflict?** The path `theme.css` does not exist in the common ancestor commit, so Git has no base version to diff either side against and cannot compute which content is an edit of which. With two unrelated files claiming the same path, Git refuses to guess, stages both versions and marks the path as conflicted.


evidence/conflict_evidence_2.png

* **Caption:** `feat/14-theme-dark` created `css/theme.css` containing a dark reading palette, while `feat/14-theme-light` independently created a file at the same path containing a high-contrast light palette. After the dark branch was merged to `main`, merging `main` into the light branch produced `CONFLICT (add/add): Merge conflict in css/theme.css`. It was resolved by keeping the dark tokens as the `:root` default and scoping the light tokens under a `[data-theme="light"]` selector, so both contributions survive as switchable themes.


---

### Conflict 3 — Different Cause

**What cause did you use?** Delete/modify conflict. One branch removing a region of a file that another branch was editing.
 

**Why does this cause trigger a conflict?**  One side removed the lines entirely while the other side changed those same lines, so there is no surviving location in which to apply the modification. Git will not silently discard either the deletion or the edit, since both are deliberate changes relative to the common ancestor, so it surfaces the removed region and the modified region together for a human decision.


evidence/conflict_evidence_3.png

* **Caption:** `refactor/15-trim-footer` deleted the entire `<footer class="site-footer">` block from `index.html` as part of a cleanup, while `feat/15-footer-social` extended that same block with a list of social media links. Once the removal branch was merged to `main`, merging `main` into `feat/15-footer-social` flagged the footer region, with the incoming side empty. I resolved it in favour of the enhanced footer, as the social links were a deliberate feature addition and the removal had been speculative.

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
