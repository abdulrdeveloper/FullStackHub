/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {

  switch (color) {

    case "GREEN":
      return "GO";

    case "Green":
      return "GO";

    case "green":
      return "GO";

    case "YELLOW":
      return "SLOW DOWN";

    case "Yellow":
      return "SLOW DOWN";

    case "yellow":
      return "SLOW DOWN";

    case "RED":
      return "STOP";

    case "Red":
      return "STOP";

    case "red":
      return "STOP";

    case "FLASHING RED":
      return "STOP AND PROCEED WITH CAUTION";

    case "Flashing Red":
      return "STOP AND PROCEED WITH CAUTION";

    case "flashing red":``
      return "STOP AND PROCEED WITH CAUTION";

    default:
      return "INVALID SIGNAL";
  }

}
