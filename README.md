# Styles pour le service de tuiles vectorielles de l'IGN

Ces styles ne sont pas officiels.




```bash
# pour regénérer les png manquants et le sprite
pnpm tsx src/sprites/cli.ts

# pour forcer la regénération d'une icone donnée même si elle existe et le sprite
pnpm tsx src/sprites/cli.ts --icons parking

# pour forcer la regénération de plusieurs icônes même si elles existent
# et le sprite
pnpm tsx src/sprites/cli.ts --icons parking --icons phare

# pour regénérer toutes les icones et le sprite
pnpm tsx src/sprites/cli.ts --force
```