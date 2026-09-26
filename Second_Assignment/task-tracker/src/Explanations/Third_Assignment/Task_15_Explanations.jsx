/*

Why should tests avoid the application's real data file?
Running tests directly against the production data file risks overwriting, corrupting, or deleting real user data.

What is a temporary directory?
A short-lived, isolated directory created dynamically (usually in the system's temporary folder) specifically
for temporary operations and safely discarded afterward.

Why must tests use their own data? To ensure tests are predictable,
reliable, and completely independent of external or pre-existing states.

Why should cleanup happen even when a test fails? If a test throws an assertion error mid-execution,
cleanup routines (like try...finally blocks) ensure leftover junk files do not linger on the disk or pollute subsequent test runs.

*/
