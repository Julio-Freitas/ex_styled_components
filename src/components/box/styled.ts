import Styled, { CSSProperties } from "styled-components";

export interface TypeCss {
  customCss: CSSProperties;
}

const allProperty = window.getComputedStyle(
  document.querySelector("html") as HTMLElement
);

const formatedNameProperty = (property: string) => {
  const originalName = property;
  const splitPropertys = originalName.split("");

  const indexsProps = splitPropertys.map((property) =>
    /[A-Z]/.test(property) ? `-${property.toLocaleLowerCase()}` : property
  );
  const hasProperty = allProperty[originalName as any];
  if (hasProperty) return indexsProps.join("");
  return "";
};

export const Container = Styled.div<TypeCss>`
    transition:  0.5s all;

    ${({ customCss }) => {
      return Object.keys(customCss)
        .map((prop) => {
          const value = customCss[`${prop}` as keyof CSSProperties];
          return `${formatedNameProperty(prop)}: ${value}`;
        })
        .join(";");
    }}
`;
