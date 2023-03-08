new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 100,
    pcLife: 100,
    result: "",
    logs: [],
  },
  methods: {
    resetGame() {
      this.running = false;
    },
    startGame() {
      this.running = true;
      this.logs = [];
      this.playerLife = 100;
      this.pcLife = 100;
    },
    handleAttack(especial = false) {
      this.attack("pcLife", 5, 10, especial, {
        source: "Player",
        target: "PC",
        cls: "player",
      });

      if (this.pcLife > 0) {
        this.attack("playerLife", 7, 12, false, {
          source: "PC",
          target: "Player",
          cls: "pc",
        });
      }
    },
    attack(attacker, min, max, especial, log) {
      const plus = especial ? 5 : 0;
      const value = this.getRandomValue(min + plus, max + plus);

      this[attacker] = Math.max(this[attacker] - value, 0);
      this.registerLog(
        `${log.source} has hit ${log.target} with ${value} of damage.`,
        log.cls
      );
    },
    healAndAttack() {
      this.heal(10, 15);
      this.attack("playerLife", 7, 12, false, {
        source: "PC",
        target: "Player",
        cls: "pc",
      });
    },
    heal(min, max) {
      const healValue = this.getRandomValue(min, max);
      this.playerLife = Math.min(this.playerLife + healValue, 100);
      this.registerLog(`Player has received ${healValue} of life.`, "player");
    },
    getRandomValue(min, max) {
      const calc = Math.random() * (max - min) + min;
      return Math.round(calc);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  computed: {
    hasResult() {
      return this.playerLife === 0 || this.pcLife === 0;
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false;
    },
  },
});
