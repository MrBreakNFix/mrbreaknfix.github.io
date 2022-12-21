public class calc {
     public static void main(String[] args) {}
     static {
          try {
               Runtime.getRuntime().exec("calc");
          } catch (Exception e) {
               e.printStackTrace();
          }
     }
}
