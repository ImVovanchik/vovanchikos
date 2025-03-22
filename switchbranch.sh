#!/usr/bin/bash
echo "Переключение бренча"
echo
echo "Выберите цифру:"
echo "1. main"
echo "2. dev"

read -p "Введите цифру: " branch

case $branch in
  1)
    git switch main
    ;;
  2)
    git switch dev
    ;;
  *)
    echo "Неверный выбор. Попробуйте снова."
    ;;
esac