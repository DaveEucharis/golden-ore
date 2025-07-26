import plugin from "tailwindcss/plugin";

export default {
  plugins: [
    plugin(function ({ addComponents }) {
      const size = [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ];

      size.forEach((val, i) => {
        if (i > 10 || i === undefined || val === undefined) return;

        const className = ".responsive-text-" + val;

        const component = {
          [className]: {
            [`@apply text-${val} md:text-${size[i + 1]} lg:text-${size[i + 2]}`]:
              {},
          },
        };

        addComponents(component);
      });
    }),
  ],
};
