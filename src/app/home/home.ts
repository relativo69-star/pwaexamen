import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Header,
    Footer,  
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
ngOnInit() {
  const btnPermitir = document.getElementById("btnPermitir");
  const btnProbar = document.getElementById("btnProbar");

  btnPermitir?.addEventListener("click", async () => {
    const permiso = await Notification.requestPermission();
    if (permiso === "granted") {
      alert("✅ Permiso concedido para notificaciones.");
    } else if (permiso === "denied") {
      alert("❌ Permiso denegado.");
    } else {
      alert("ℹ️ Permiso en estado 'default'.");
    }
  });

  btnProbar?.addEventListener("click", () => {
    if (Notification.permission === "granted") {
      new Notification("Hola 🚀", {
        body: "Esta es una notificación de prueba.",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
      });
    } else {
      alert("Primero debes permitir las notificaciones.");
    }
  });
}
