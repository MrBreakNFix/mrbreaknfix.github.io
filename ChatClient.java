import java.io.*;
import java.net.*;
import java.util.Scanner;

public class ChatClient {
    private static final String HOST = "localhost";
    private static final int PORT = 1234;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try (Socket socket = new Socket(HOST, PORT)) {
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

            System.out.print("Enter your username: ");
            String username = scanner.nextLine();
            out.println(username);

            Thread receiveThread
                    = new Thread(() -> {
                try {
                    String serverMessage;
                    while ((serverMessage = in.readLine()) != null) {
                        System.out.println(serverMessage);
                    }
                } catch (IOException e) {
                    System.out.println(e.getMessage());
                }
            });
            receiveThread.start();

            String input;
            while ((input = scanner.nextLine()) != null) {
                out.println(input);
            }
        } catch (ConnectException e) {
            System.out.println("Could not connect to the server. There might not be one on this network, or it could be off");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
