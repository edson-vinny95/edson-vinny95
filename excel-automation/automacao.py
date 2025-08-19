import pandas as pd

# Lê a planilha
df = pd.read_excel("dados.xlsx")

# Exemplo: calcula a média de uma coluna "Notas"
if "Notas" in df.columns:
    media = df["Notas"].mean()
    print(f"Média das notas: {media:.2f}")

# Cria nova planilha com resultado
df["Aprovado"] = df["Notas"].apply(lambda x: "Sim" if x >= 7 else "Não")
df.to_excel("resultado.xlsx", index=False)
print("Arquivo 'resultado.xlsx' gerado com sucesso!")