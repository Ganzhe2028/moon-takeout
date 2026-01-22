Project: Moon Takeout (Mobile Web App Demo) Tech Stack: React (Next.js 16), Tailwind CSS, Framer Motion (for animations), Lucide React (icons). Design Aesthetic: Linear/Airbnb Style (Clean, Minimalist, Efficient, Elegant). Mobile-first design.

Context
You are building a high-fidelity frontend demo for "Moon Takeout," a student-led group delivery app for Moonshot Academy. The goal is to aggregate orders to save on delivery fees. We need two specific views:

The "Lobby" (Carpool List): Where users join existing group orders.

The "Success & Impact" Page: Displayed after payment, highlighting savings and collective impact.

View 1: The Lobby (Carpool Interface)
Interaction Model: "Game Lobby" / "Room" style. Visual Style: Clean cards, distinct borders, subtle shadows (Linear style).

Requirements:

Header: Simple greeting with current user status (e.g., "Hi, Student").

Filter/Tabs: "All Vans", "My Grade", "Near Closing".

The List (The Core): Display a list of active "Food Vans" (Group Orders).

Card Content:

Room Name: e.g., "[G10-A] 奶茶专列" or "[Library] 麦当劳拼车".

Status: e.g., "3/5 joined" (Visual progress bar or avatar stack).

Time: "Closing in 10m" (Use a red or urgent color for low time).

Action: A clear, elegant "Join / 上车" button.

Logic: Clicking "Join" should simulate entering the room (just a toast notification or console log for this demo).

View 2: The Success & Impact Page (The "Hook")
Core Concept: Collective Honor & Concrete Visualization. Trigger: This view appears after a simulated "Payment Success".

Data Simulation (Mock Logic):

Write a function generateSavings() that runs on mount.

userSaved = Random float between ¥3.0 and ¥15.0.

teamSaved = userSaved \* Random integer (3 to 8 people).

schoolTotal = A static large number (e.g., ¥12,450) + teamSaved.

UI Components:

Success State: Big green checkmark or minimal animation. "Payment Successful / 支付成功".

Personal Impact (Hero Section):

Display userSaved prominently (Large Typography).

Text: "本次拼团为你节省了 ¥X".

Concrete Metaphor: Display a dynamic text below the amount: "相当于省下了 [N] 次拼好饭" (Assume 1 "Pinhaofan" = ¥10, calculate N based on userSaved).

Collective Honor (The "Stats" Card):

A sleek card showing the group context.

"全车共省: ¥[teamSaved]"

"本学期全校累计节省: ¥[schoolTotal]"

Achievement Unlocked:

A badge style UI element.

Text: "🏆 达成成就：善及万物 (Benevolence to all things)".

Visual: Make it look like a premium reward/achievement.

Action Buttons: "Back to Home", "Share Report".

Design Guidelines (The "Linear" Look)
Typography: Sans-serif, Inter or similar. High contrast titles, subtle text for metadata.

Borders & Radius: Use rounded-xl or rounded-2xl. Use subtle borders (border-gray-200) instead of heavy logic.

Colors:

Primary: Deep Blue or Indigo (Intellectual/Tech vibe).

Success: Muted Green (not neon).

Background: White or extremely light gray (bg-gray-50).

Spacing: Generous padding (p-6 or p-8). Don't clutter.

Detailed Content (Copy-Paste these strings into the code)
Lobby Card Example:

Title: "[G10] 喜茶 HEYTEA 车队"

Subtitle: "由 G10-A 发起 · 差 2 人成团"

Tag: "免配送费"

Impact Text Example:

"你省下的钱够再买 1.5 次拼好饭"

"本学期探月全校累计节省 10,000+ 元"

Instruction: Please generate the React code for these two components. Use Tailwind for styling. Create a main App component to toggle between the two views for demonstration.
